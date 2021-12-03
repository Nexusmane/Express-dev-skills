const skills = [
    { id: 125223, skill: "HTML", expert: true },
    { id: 127904, skill: "Javascript", expert: true },
    { id: 139608, skill: "CSS", expert: false },
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
    return skills.find(skill => skills.id == id);
  }
  