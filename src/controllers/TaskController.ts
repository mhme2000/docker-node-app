import { executeQuery } from "../usecases/ExecuteQueryUseCase";

exports.get = async (req: any, res: any) => {
    var query = "SELECT * FROM Task;";
    var result = await executeQuery(query);
    if(result != null) res.json(result.rows).status(200);
    res.json().status(400);
};

exports.post = async (req: any, res: any) => {
    var body = req.body;
    var query = `INSERT INTO Task (taskName, beginDate, endDate) VALUES ('${body.taskName}', '${body.beginDate}', null); commit;`;
    var result = await executeQuery(query);
    if(result != null) res.json(result.rows).status(200);
    res.json().status(400);
};

exports.delete = async (req: any, res: any) => {
    var routeParams = req.params;
    var query = `DELETE FROM task WHERE taskId = ${routeParams.taskId}`;
    var result = await executeQuery(query);
    if(result != null) res.json(result.rows).status(200);
    res.json().status(400);
};

export default module.exports;
