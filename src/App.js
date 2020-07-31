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

const App = () => {
    const [animalList, setAnimal] = useState(data);
    const [open, setOpen] = React.useState(false);
    const [editing, setEditing] = useState(false);

    const initialUser = { id: null, name: "", username: "" };

    const [currntAnimal, setCurrentAnimal] = useState(initialUser);

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

    const editAnimal = (id, animal) => {
        setEditing(true);
        setCurrentAnimal(animal);
    };

    const updateAnimal = (newAnimal) => {
        setAnimal(
            animalList.map((animal) =>
                animal.id === currntAnimal.id ? newAnimal : animal
            )
        );
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
                    <DialogTitle id="form-dialog-title">Add Animal</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <AddAnimal
                                addAnimal={addAnimal}
                                handleClose={handleClose}
                            />
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </header>
            <AnimalCard
                data={animalList}
                deleteAnimal={deleteAnimal}
                editAnimal={editAnimal}
                handleClickOpen={handleClickOpen}
            />
            <footer></footer>
        </Container>
    );
};

export default App;
