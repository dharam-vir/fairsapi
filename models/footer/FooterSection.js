module.exports = (sequelize, DataTypes) => {
    const FooterSection = sequelize.define('FooterSection', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    FooterSection.associate = (models) => {
      FooterSection.hasMany(models.FooterLink, {
        foreignKey: 'sectionId',
        as: 'links',
        onDelete: 'CASCADE',
      });
    };
  
    return FooterSection;
  };