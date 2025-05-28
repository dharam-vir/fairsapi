module.exports = (sequelize, DataTypes) => {
    const FooterLink = sequelize.define('FooterLink', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    FooterLink.associate = (models) => {
      FooterLink.belongsTo(models.FooterSection, {
        foreignKey: 'sectionId',
        as: 'section',
      });
    };
  
    return FooterLink;
  };