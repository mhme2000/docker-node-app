import { executeQuery } from "../usecases/ExecuteQueryUseCase";

exports.get = async (req: Request, res: any) => {
    await executeQuery("DROP DATABASE IF EXISTS Todo;");
    await executeQuery("commit;");
    await executeQuery("CREATE DATABASE Todo;");
    await executeQuery("commit;");
    await executeQuery("SET search_path TO Todo;");
    await executeQuery("DROP TABLE IF EXISTS Task;");
    await executeQuery("commit;");
    await executeQuery("CREATE TABLE Task(taskId serial, taskName varchar(255) not null, beginDate date, endDate date, createdAt timestamp default current_timestamp, primary key(taskId));");
    await executeQuery("commit;");
    res.send("API running").status(200);
};

export default module.exports;