const { createClient } = supabase

// just add the keys 
// * church db in supabase
supabase = createClient("https://noovhkobgulmzyahvsgi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vb3Zoa29iZ3VsbXp5YWh2c2dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyMjAxMTcsImV4cCI6MTk5NDc5NjExN30.zehc-cUJVTWoYoUommxQNDyz7baJnrwjeSsLCy1r_rY")

// * personal db in supabase
// supabase = createClient("https://uryjsoflpaycebbdoijr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyeWpzb2ZscGF5Y2ViYmRvaWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5MDM4ODAsImV4cCI6MTk5NDQ3OTg4MH0.7SMduIi9AHCtV_FE1JYwLmw4XpmL6c49RvapSfh2qPE")

const form = document.querySelector("#new_user_detials")

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const prayerInput = form.querySelectorAll('input ,textarea')

    let submision = {}

    prayerInput.forEach(element => {
        const { value, name } = element
        if (value) {
            submision[name] = value
        }
    })

    // console.log(submision)

    const { error, data } = await supabase.from('newmembers').insert([submision], { returning: 'minimal' })
    console.log(error, data)
    // return onclick=submit();
    // error handling 
    if (error) {
        alert('facing some issue in code')
    } else {
        alert('Your Prayer is Accepted')
    }


    // reset the full form 
    prayerInput.forEach(element => element.value = '')


    // Redirect to a new page
    window.location.href = "../pages/success.html";
})