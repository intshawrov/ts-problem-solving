// A cinema booking app confirms a ticket purchase with a short readable message. A ticket contains a moviegoer's name, the movie title, and the showtime.

type TicketDetails = {
    name: string,
    movie: string,
    time: string
}

const formatTicketConfirmation = (ticket:TicketDetails): string =>{

    return `${ticket.name}'s ticket for ${ticket.movie} is confirmed at ${ticket.time}.`

}

console.log(formatTicketConfirmation({ name: "Nabila", movie: "Interstellar", time: "9:15 PM" }));
