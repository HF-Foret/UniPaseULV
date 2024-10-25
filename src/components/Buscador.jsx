import PropTypes from 'prop-types';

export const Buscador = ({ onSubmit, valorInput, onChange }) => {
  return (
    <form onSubmit={onSubmit} className="d-flex">
      <input
        value={valorInput} // Vínculo con el estado del valor de entrada
        onChange={onChange} // Manejador de cambios
        className="form-control me-2" // Clases de Bootstrap
        type="text"
        placeholder="Buscar por nombre, correo o tipo"
      />
      <button type="submit" className="btn btn-primary">
        Buscar
      </button>
    </form>
  );
};

// Definir los tipos de las props que el componente debe recibir
Buscador.propTypes = {
  onSubmit: PropTypes.func.isRequired, // onSubmit debe ser una función y es obligatorio
  valorInput: PropTypes.string.isRequired, // valorInput debe ser una cadena de texto y es obligatorio
  onChange: PropTypes.func.isRequired, // onChange debe ser una función y es obligatorio
};
