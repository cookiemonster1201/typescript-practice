1) COMPOSITION                                  --------->.   number | string | boolean






2) TUPLE  (for Arrays of predefined length)        --------->.     [number | string | boolean]






3) TYPES  (for primitives or arrays)               --------->.     type ID = number | string (like a variable for storing tuples/compositions/simple types)






4) TYPE UNION  (for a number of specific VALUES)  --------->.     type RequestStatus = "request" | "success" | "error".    type CellSize = 4 | 8 | 12 | 18






5) INTERFACE (for describing the shape of obj)    --------->.     interface IPluginConfig {selector: string; readonly perPage: number, draggable?: boolean}






6) INTERFACE (with unknown quantity of properties)    ----------->.     interface IPerson {[key: string]: number}






7) ENUM (for several options)            -------------->.     enum PizzaSize {Small = 's', Medium = 'm', Large = 'l'}






8) EXTENSION of interfaces (like extending basic classes)    ------------->  onterface IStudent extends Iperson { property for extension }





9) GENERICS (for utility functions mostly when we can't predict the type of passed parameters)         -------------->     <T> ..... :T 
