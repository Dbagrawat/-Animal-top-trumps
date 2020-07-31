import React, { useState } from "react";
import "./App.css";
import data from "./data/data";
import AnimalCard from "./components/AnimalCard";
import AddAnimal from "./components/AddAnimal";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditAnimal from "./components/EditAnimal";

const App = () => {
    const initialFormState = {
        id: null,
        name: "current",
        type: " ",
        diet: " ",
        isExtinct: "",
        description: "",
    };
    // Setting state

    const [animalList, setAnimal] = useState(data);
    const [currentAnimal, setCurrentAnimal] = useState(initialFormState);
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addAnimal = (animal) => {
        animal.id = animalList.length + 1;
        setAnimal([...animalList, animal]);
        setOpen(false);
    };

    const deleteAnimal = (id) =>
        setAnimal(animalList.filter((animal) => animal.id !== id));

    const editAnimal = (animal) => {
        setEditing(true);
        setOpen(true);
        setCurrentAnimal(animal);
    };

    const updateAnimal = (newAnimal) => {
        setAnimal(
            animalList.map((animal) =>
                animal.id === currentAnimal.id ? newAnimal : animal
            )
        );
        setOpen(false);
    };

    return (
        <Container maxWidth="lg">
            <header style={{ textAlign: "center" }}>
                <h1>Animal ‘top trumps’</h1>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickOpen}
                >
                    Add Animal
                </Button>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        {editing ? "Edit Animal" : "Add Animal"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {editing ? (
                                <EditAnimal
                                    currentAnimal={currentAnimal}
                                    updateAnimal={updateAnimal}
                                    //editAnimal={editAnimal}
                                    //editing={editing}
                                />
                            ) : (
                                <AddAnimal
                                    addAnimal={addAnimal}
                                    handleClose={handleClose}
                                />
                            )}
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </header>
            <AnimalCard
                data={animalList}
                deleteAnimal={deleteAnimal}
                editThisAnimal={editAnimal}
                //handleClickOpen={editAnimal}
            />
            <footer></footer>
        </Container>
    );
};

export default App;
