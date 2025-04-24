exports.contactUs = (req, res) => {
    let paramsName = req.params.myName;
    res.render("contact", { name: paramsName });
    res.render("contact", { firstName: req.params.myName });
};