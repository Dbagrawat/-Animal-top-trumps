import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
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
const EditAnimal = (props) => {
    const classes = useStyles();
    const [animal, setAnimal] = useState(props.currentAnimal);

    useEffect(() => {
        setAnimal(props.currentAnimal);
    }, [props]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAnimal({ ...animal, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.preventDefault();
        if (animal.name) props.updateAnimal(animal);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="standard-basic"
                label="Name"
                name="name"
                value={animal.name}
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
                    <MenuItem value="Herbivore">Herbivore</MenuItem>
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
                value={animal.description}
            />

            <Button
                type="submit"
                color="primary"
                variant="contained"
                onClick={handleSubmit}
            >
                Update Animal
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

export default EditAnimal;
