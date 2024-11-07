async function getData(url: string): Promise<void> { // async returns a promise
  try {
    let response = await fetch(url); // set to Response type by type inference
    let data = await response.json(); // don't need to set type, not using data later
    console.log(data); // data implicitly set to any somehow (exception to rule?)  
  } catch (error: unknown) {
    if (typeof error === 'string') {
      console.error(error);
    } else if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('An unknown error has occurred.');
    }
  }
}
