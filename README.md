composition                                     --------->.   number | string | boolean






tuple  (for Arrays of predefined length)        --------->.     [number | string | boolean]





types  (for primitives or arrays)               --------->.     type ID = number | string (like a variable for storing tuples/compositions/simple types)





types union  (for a number of specific VALUES)  --------->.     type RequestStatus = "request" | "success" | "error".    type CellSize = 4 | 8 | 12 | 18






interfaces (for describing the shape of obj)    --------->.     interface IPluginConfig {selector: string; readonly perPage: number, draggable?: boolean}
