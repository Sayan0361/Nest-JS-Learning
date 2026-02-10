A DTO (Data Transfer Object) is a class that defines:
    ->what data is allowed
    ->what shape the data has
    ->what goes IN or OUT of your API
    ->Define what the client is allowed to send or receive

DTO vs Interface
  Interface: 
    ->Compile-time only
    ->Removed after TS compilation
    ->Zero runtime value
    ->Fine for internal logic
    ->Useless for validation
  DTO:
    ->Exists at runtime
    ->Can be decorated
    ->Can be validated
    ->Can be transformed
