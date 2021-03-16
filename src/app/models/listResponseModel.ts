import { ResponseModel } from "./responseModel";

export interface ListResposeModel<T> extends ResponseModel{
    data:T[];

}