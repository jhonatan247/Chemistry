//Evita que el usuario salga de la página por accidente, mostrando un mensaje de confirmación.
window.onbeforeunload = confirmExit;
  function confirmExit()
  {
    return "Usted está saliendo de la pagina";
  }