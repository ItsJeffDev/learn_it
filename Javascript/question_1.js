let isOver = false

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

while (!isOver) {
    let user = prompt("Enter: ");

    let last = contacts.length - 1;

    switch (user) {
        case "first":
            console.log(`First Contact: ${contacts[0]}`);
            console.log(`Name: ${contacts[0].name}\nPhone: ${contacts[0].phone}\nEmail: ${contacts[0].email}`);
            isOver = true
            break;

        case "last":
            console.log(`Last Contact: ${contacts[last]}`);
            console.log(`Name: ${contacts[last].name}\nPhone: ${contacts[last].phone}\nEmail: ${contacts[last].email}`);
            isOver = true;
            break;

        case "all":
            for (let key in contacts) {
                let contact = contacts[key];
                console.log(`Contacts: ${parseInt(key) + 1}: `);
                console.log(`Name: ${contact.name}`);
                console.log(`Phone: ${contact.phone}`);
                console.log(`Email: ${contact.email}`);
                console.log("---------------------------");
            }
            isOver = true;
            break;
        case "new":
            let new_name = prompt("Enter Name: ");
            let new_phone = prompt("Enter Phone: ");
            let new_email = prompt("Enter Email: ");

            let new_contact = {
                name: new_name,
                phone: new_phone,
                email: new_email
            };

            contacts.push(new_contact);

            console.log(`Name: ${new_contact.name}`);
            console.log(`Phone: ${new_contact.phone}`);
            console.log(`Email: ${new_contact.email}`);            
            isOver = true;
            break;
        case "quit":
            isOver = true;
    }
}