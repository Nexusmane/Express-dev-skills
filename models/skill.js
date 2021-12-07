const skills = [
    { id: 133423, skill: "HTML", expert: true },
    { id: 155634, skill: "Javascript", expert: true },
    { id: 188522, skill: "CSS", expert: false },
  ];
  
  module.exports = {
    getAll,
    getOne,
    deleteOne,
    create
  };
  
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
    return skills.find(skill => skill.id == id);
  }
  
  function create(skillObj) {
      skillObj.id = Math.floor(Math.random() * 1000000);
      skillObj.done = false;
      skills.push(skillObj);
  }

  function deleteOne(id) {
      const skillIdx = skills.findIndex(skill => skill.id == id);
      skills.splice(skillIdx, 1)
  }