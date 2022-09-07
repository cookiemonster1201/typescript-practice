composition                                     --------->.   number | string | boolean






tuple  (for Arrays of predefined length)        --------->.     [number | string | boolean]






types  (for primitives or arrays)               --------->.     type ID = number | string (like a variable for storing tuples/compositions/simple types)






types union  (for a number of specific VALUES)  --------->.     type RequestStatus = "request" | "success" | "error".    type CellSize = 4 | 8 | 12 | 18






interfaces (for describing the shape of obj)    --------->.     interface IPluginConfig {selector: string; readonly perPage: number, draggable?: boolean}






interface (with unknown quantity of properties)    ----------->.     interface IPerson {[key: string]: number}






enums (for several options)            -------------->.     enum PizzaSize {Small = 's', Medium = 'm', Large = 'l'}






extenstion of interfaces (like extending basic classes)    ------------->  onterface IStudent extends Iperson { property for extension }




