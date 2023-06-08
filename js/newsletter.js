    const { createClient } = supabase
    supabase = createClient("https://uryjsoflpaycebbdoijr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyeWpzb2ZscGF5Y2ViYmRvaWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5MDM4ODAsImV4cCI6MTk5NDQ3OTg4MH0.7SMduIi9AHCtV_FE1JYwLmw4XpmL6c49RvapSfh2qPE")
    const email = document.querySelector("#emailForm")
    email.addEventListener('submit', async (event) => {
      event.preventDefault()
      const emailInputs = email.querySelectorAll('input')
      let submision = {}
      emailInputs.forEach(element => {
        const { value, name } = element
        if (value) {
          submision[name] = value
        }
      })
      console.log(submision)
      const { error, data } = await supabase.from('emails').insert([submision], { returning: 'minimal' })
      console.log(data)
      if (error) {
        alert('There was an error please try again')
      } else {
        alert('thanks you for submit for newletter ')
        // Show the popup after 2 seconds
        // setTimeout(() => {
        //   const popup = document.getElementById('esub');
        //   popup.style.display = 'block';
        // }, 1000);

      }

      //   emailInputs.reset()
      emailInputs.forEach(element => element.value = '')


    })

    // Close the popup when the close button is clicked
    const closeButton = document.querySelector('.modal-close');
    closeButton.addEventListener('click', () => {
      const popup = document.getElementById('esub');
      popup.style.display = 'none';
    });
