const skills = [
    { id: 133423, skill: "HTML", expert: true },
    { id: 155634, skill: "Javascript", expert: true },
    { id: 188522, skill: "CSS", expert: false },
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
  