import React, { useState } from "react";
import { useNavigate } from "react-router";
import PokemonService from "../services/PokemonService";
import formatType from "./../helpers/format-type.ts";

const PokemonForm = ({ pokemon, isEditForm }) => {
  const navigate = useNavigate();

  const types = [
    "Plante",
    "Feu",
    "Eau",
    "Insecte",
    "Normal",
    "Electrik",
    "Poison",
    "Fée",
    "Vol",
    "Combat",
    "Psy",
  ];

  const [form, setForm] = useState({
    picture: { value: pokemon.picture },
    name: { value: pokemon.name, isValid: true },
    hp: { value: pokemon.hp, isValid: true },
    cp: { value: pokemon.cp, isValid: true },
    types: { value: pokemon.types, isValid: true },
  });

  const hasType = (type) => {
    return form.types.value.includes(type);
  };

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newField = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField });
  };

  const selectType = (type, e) => {
    const checked = e.target.checked;
    let newField;

    if (checked) {
      const newTypes = form.types.value.concat([type]);
      newField = { value: newTypes };
    } else {
      const newTypes = form.types.value.filter(
        (currentType) => currentType !== type
      );
      newField = { value: newTypes };
    }

    setForm({ ...form, ...{ types: newField } });
  };

  const isAddForm = () => {
    return !isEditForm;
  };

  const validateForm = () => {
    let newForm = form;

    // validator url si création
    if (isAddForm()) {
      const start =
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
      const end = ".png";

      if (
        !form.picture.value.startsWith(start) ||
        !form.picture.value.endsWith(end)
      ) {
        const errorMsg = "L'url n'est pas valide.";
        const newField = {
          value: form.picture.value,
          error: errorMsg,
          isValid: false,
        };
        newForm = { ...newForm, ...{ picture: newField } };
      } else {
        const newField = {
          value: form.picture.value,
          error: "",
          isValid: true,
        };
        newForm = { ...newForm, ...{ picture: newField } };
      }
    }

    // Validator name
    if (!/^[a-zA-Zàéè ]{3,25}$/.test(form.name.value)) {
      const errorMsg = "Le nom du pokémon est requis (3-25).";
      const newField = {
        value: form.name.value,
        error: errorMsg,
        isValid: false,
      };
      newForm = { ...newForm, ...{ name: newField } };
    } else {
      const newField = { value: form.name.value, error: "", isValid: true };
      newForm = { ...newForm, ...{ name: newField } };
    }

    // Validator hp
    if (!/^[0-9]{1,3}$/.test(form.hp.value)) {
      const errorMsg =
        "Les points de vie du pokémon sont compris entre 0 et 999.";
      const newField = {
        value: form.hp.value,
        error: errorMsg,
        isValid: false,
      };
      newForm = { ...newForm, ...{ hp: newField } };
    } else {
      const newField = { value: form.hp.value, error: "", isValid: true };
      newForm = { ...newForm, ...{ hp: newField } };
    }

    // Validator cp
    if (!/^[0-9]{1,2}$/.test(form.cp.value)) {
      const errorMsg = "Les dégâts du pokémon sont compris entre 0 et 99";
      const newField = {
        value: form.cp.value,
        error: errorMsg,
        isValid: false,
      };
      newForm = { ...newForm, ...{ cp: newField } };
    } else {
      const newField = { value: form.cp.value, error: "", isValid: true };
      newForm = { ...newForm, ...{ cp: newField } };
    }

    setForm(newForm);
    return (
      newForm.picture.isValid &&
      newForm.name.isValid &&
      newForm.hp.isValid &&
      newForm.cp.isValid
    );
  };

  const deletePokemon = () => {
    PokemonService.deletePokemon(pokemon).then(() => navigate(`/pokemons`));
  };

  const addPokemon = () => {
    PokemonService.addPokemon(pokemon).then(() =>
      navigate(`/pokemons/${pokemon.id}`)
    );
  };

  const updatePokemon = (pokemon) => {
    PokemonService.updatePokemon(pokemon).then(() =>
      navigate(`/pokemons/${pokemon.id}`)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      pokemon.picture = form.picture.value;
      pokemon.name = form.name.value;
      pokemon.hp = form.hp.value;
      pokemon.cp = form.cp.value;
      pokemon.types = form.types.value;
      isEditForm ? updatePokemon() : addPokemon();
    }
  };

  const isTypesValid = (type) => {
    if (form.types.value.length === 1 && hasType(type)) {
      return false;
    }
    if (form.types.value.length >= 3 && !hasType(type)) {
      return false;
    }
    return true;
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            {isEditForm && (
              <div className="card-image">
                <img
                  src={pokemon.picture}
                  alt={pokemon.name}
                  style={{ width: "250px", margin: "0 auto" }}
                />
                <span className="btn-floating halfway-fab waves-effect waves-light">
                  <i onClick={deletePokemon} className="material-icons">
                    delete
                  </i>
                </span>
              </div>
            )}
            <div className="card-stacked">
              <div className="card-content">
                {isAddForm() && (
                  <div className="form-group">
                    <label htmlFor="name">Image</label>
                    <input
                      id="picture"
                      name="picture"
                      type="text"
                      className="form-control"
                      value={form.picture.value}
                      onChange={(e) => handleInputChange(e)}
                    ></input>
                    {form.picture.error && (
                      <div className="card-panel red accent-1">
                        {form.picture.error}
                      </div>
                    )}
                  </div>
                )}
                {/* Pokemon name */}
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    value={form.name.value}
                    onChange={(e) => handleInputChange(e)}
                  ></input>
                  {form.name.error && (
                    <div className="card-panel red accent-1">
                      {form.name.error}
                    </div>
                  )}
                </div>
                {/* Pokemon hp */}
                <div className="form-group">
                  <label htmlFor="hp">Point de vie</label>
                  <input
                    id="hp"
                    name="hp"
                    type="number"
                    className="form-control"
                    value={form.hp.value}
                    onChange={(e) => handleInputChange(e)}
                  ></input>
                  {form.hp.error && (
                    <div className="card-panel red accent-1">
                      {form.hp.error}
                    </div>
                  )}
                </div>
                {/* Pokemon cp */}
                <div className="form-group">
                  <label htmlFor="cp">Dégâts</label>
                  <input
                    id="cp"
                    name="cp"
                    type="number"
                    className="form-control"
                    value={form.cp.value}
                    onChange={(e) => handleInputChange(e)}
                  ></input>
                  {form.cp.error && (
                    <div className="card-panel red accent-1">
                      {form.cp.error}
                    </div>
                  )}
                </div>
                {/* Pokemon types */}
                <div className="form-group">
                  <label>Types</label>
                  {types.map((type) => (
                    <div key={type} style={{ marginBottom: "10px" }}>
                      <label>
                        <input
                          id={type}
                          type="checkbox"
                          className="filled-in"
                          value={form.types.value}
                          disabled={!isTypesValid(type)}
                          checked={hasType(type)}
                          onChange={(e) => selectType(type, e)}
                        ></input>
                        <span>
                          <p className={formatType(type)}>{type}</p>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">
                  Valider
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PokemonForm;
