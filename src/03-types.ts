// type ID = number;

type ID = number | string;
// composition stored in type
const userID: ID = 5;
const postID: ID = "fjetdfk";
// ID is called alias (psevdonim )

type Coords = [number, number];
// tuple stored in type
const cords: Coords = [44.32, 502.457];

//request
//success
//error
type ReqStatus = "request" | "success" | "error";
// union stored in type

const requestStatus: ReqStatus = "success";

console.log(userID, postID, cords, requestStatus);

export {};
