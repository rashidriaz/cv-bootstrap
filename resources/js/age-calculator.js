function calculateDate(date1,date2) {
    const diff = Math.floor(date1.getTime() - date2.getTime());
    const day = 1000 * 60 * 60 * 24;

    let days = Math.floor(diff/day);
    const months = Math.floor((days%365.25)/29.531);
    const years = Math.floor(days/365.25);
    days = Math.floor((days%365.25)%29.531)

    return years + "y " + months + "m " + days + "d";
}
$(function (){
    const today = new Date()
    const past = new Date(2001,7,21)
    const age = calculateDate(today, past);
    $("#age").append(age);
    console.log(age);
});