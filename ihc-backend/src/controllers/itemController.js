const db = require('../config/database');

const itemController = {
  
  // Obtener todos los items disponibles
  getAllItems: async (req, res) => {
    try {
      const query = `
        SELECT 
          i.id_item,
          i.nombre,
          i.descripcion,
          i.precio,
          i.kcal_aprox,
          i.url_imagen,
          i.nivel_picante,
          i.sabor_base,
          i.disponible,
          c.nombre as categoria
        FROM item i
        INNER JOIN categoria c ON i.id_categoria = c.id_categoria
        WHERE i.disponible = 1
        ORDER BY c.id_categoria, i.nombre
      `;
      
        const items = await db.query(query);
        res.json(items)
      
    } catch (error) {
      console.error('Error al obtener items:', error);
      res.status(500).json({ 
        success: false,
        error: 'Error al obtener los items' 
      });
    }
  }
  
};

module.exports = itemController;