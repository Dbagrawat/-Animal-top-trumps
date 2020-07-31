import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const AddAnimal = (props) => {
    const classes = useStyles();
    const initAnimal = {
        id: null,
        name: " ",
        type: " ",
        diet: " ",
        isExtinct: "",
        description: "",
    };

    const [animal, setAnimal] = useState(initAnimal);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAnimal({ ...animal, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (animal.name) {
            handleInputChange(e, props.addAnimal(animal));
        }
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="standard-basic"
                label="Name"
                name="name"
                onChange={handleInputChange}
            />
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={animal.type}
                    name="type"
                    onChange={handleInputChange}
                >
                    <MenuItem value="Mammal" name="Mammal">
                        Mammal
                    </MenuItem>
                    <MenuItem value="Reptiles">Reptiles</MenuItem>
                    <MenuItem value="Fish">Fish</MenuItem>
                    <MenuItem value="Amphibians">Amphibians</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Diet</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={animal.diet}
                    name="diet"
                    onChange={handleInputChange}
                >
                    <MenuItem value="Carnivore">Carnivore</MenuItem>
                    <MenuItem value="herbivore">Herbivore</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={animal.isExtinct}
                    name="isExtinct"
                    onChange={handleInputChange}
                >
                    <MenuItem value="false">extinc</MenuItem>
                    <MenuItem value="true">Not extinc</MenuItem>
                </Select>
            </FormControl>
            <TextareaAutosize
                aria-label="minimum height"
                rowsMin={10}
                placeholder="description"
                name="description"
                onChange={handleInputChange}
                style={{
                    width: "90%",
                    marginBottom: "20px",
                    marginTop: "20px",
                }}
            />

            <Button
                type="submit"
                color="primary"
                variant="contained"
                onClick={handleSubmit}
            >
                Add Animal
            </Button>
            <Button
                type="submit"
                color="secondary"
                variant="contained"
                onClick={props.handleClose}
            >
                Cancel
            </Button>
        </form>
    );
};

export default AddAnimal;
