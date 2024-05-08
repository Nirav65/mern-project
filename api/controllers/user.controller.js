//@desc Test
//@route /api/user/test
//@access public
const Test = (req, res) => {
    res.json({
        message: "Test route added"
    });
};

export { Test };