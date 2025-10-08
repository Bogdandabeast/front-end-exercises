function isForeigner(user) {
 const country = "España";
 const validAge = 30;
 const successMessage = "Apto para la ayuda del gobierno";
 const errorMessage = "No es apto para la ayuda del gobierno";

return (user.nationality != country && user.age == validAge) ? successMessage : errorMessage 
}


function userName(user) {
  const template = "Me llamo";
  return `${template} ${user.name} ${user.last}`;
}


function userData(user) {
  const annualSalary = user.salary * 12;
  const fullName = `${user.name} ${user.last}`;
  const formattedData = `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
  return  formattedData
}

export {
    isForeigner,
    userData,
    userName
}