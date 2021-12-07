const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create, 
  delete: deleteSkill
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function index(req, res) {
  let skills = Skill.getAll();
  res.render('skills/index', {
    skills
  });
}

function show(req, res) {
    let skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    Skill.create(req.body);
    // Redirect back to the homepage 
    res.redirect('/skills');
}