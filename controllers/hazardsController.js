const createHazard = async (req, res) => {
    res.send('create hazard')
}
const deleteHazard = async (req, res) => {
    res.send('delete hazard')
}
const updateHazard = async (req, res) => {
    res.send('update hazard')
}
const getAllHazards = async (req, res) => {
    res.send('get all hazards')
}

export { createHazard, deleteHazard, updateHazard, getAllHazards }