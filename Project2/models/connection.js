const { DateTime } = require("luxon");
const {v4: uuidv4} = require('uuid');
const events = [
    {
        connection_id: '1',
        connection_topic: 'Park Meetings',
        connection_name: 'Weddington Road Bark Park',
        host_name: 'Barbara Corcoran',
        date: '2021-07-22',
        start_time: '18:00',
        end_time: '18:30',
        location: '8955 Weddington Rd Concord, NC 28027',
        details: 'Bring your pug pups (6 to 9 months old) to play with other small pups. Pugs can be prone to gaining weight that can make breathing problems worse,'+ 
        'so it is important to keep them active and avoid any weight gain. Keeping your little one active early on with play and lots of brain-stimulating activities ' +
        'will help maintain a healthy weignt. Pug pups are still very small, there weight ranges between 7-12 pounds. They are still very small and very fragile so other ' +
        'pups are perfect for them to play with.',
        image: 'https://images.squarespace-cdn.com/content/v1/5b3522bd50a54fbd7265fdb0/1531144314899-CCNRJDCBAUWM8ZNH4ASF/BARK+Park+logo.png'
    },
    {
        connection_id: '2',
        connection_topic: 'Park Meetings',
        connection_name: 'Reedy Creek Park Dog Park',
        host_name: 'Mark Cuban',
        date: '',
        start_time: '18:00',
        end_time: '18:30',
        location: 'Charlotte, NC 28215',
        details: 'Awesome Dog park so everyone can meet and play',
        image: 'https://charlotteaxios-charlotteagenda.netdna-ssl.com/wp-content/uploads/2015/05/William-R.-Davie-park.jpg'
    },
    {
        connection_id: '3',
        connection_topic: 'Park Meetings',
        connection_name: 'Dog Park at Clarks Creek Community Park',
        host_name: 'Kevin O\'Leary',
        date: '',
        start_time: '18:00',
        end_time: '18:30',
        location: 'Charlotte, NC 28269',
        details: 'The 31-acre park is located across the street from Clarks Creek Nature Preserve. ',
        image: 'https://www.mecknc.gov/ParkandRec/Parks/ParksByRegion/NorthRegion/PublishingImages/clarks-creek-web.png'
    },
    {
        connection_id: '4',
        connection_topic: 'Pet Friendly Hotels',
        connection_name: 'Home2 Suites by Hilton Charlotte University Research Park',
        host_name: 'Lori Greiner',
        date: '',
        start_time: '18:00',
        end_time: '18:30',
        location: '625 McCullough Dr, Charlotte, NC 28262',
        details: 'Awesome Place to have pugs have a sleep over.',
        image: 'https://www.hilton.com/im/en/CLTCUHT/1002458/cltcuht-exterior-twilight.jpg?impolicy=crop&cw=5692&ch=3186&gravity=NorthWest&xposition=0&yposition=306&rw=768&rh=430'
    },
    {
        connection_id: '5',
        connection_topic: 'Pet Friendly Hotels',
        connection_name: 'Drury Inn & Suites Charlotte University Place',
        host_name: 'Robert Herjavec',
        date: '',
        start_time: '18:00',
        end_time: '18:30',
        location: '415 W W.T.Harris Blvd, Charlotte, NC 28262',
        details: 'Relax with your pug in style!',
        image: 'https://cms.druryhotels.com/media/458804/0055_exterior.jpg?anchor=center&mode=crop&width=659&height=422&rnd=132291019650000000'
    },
    {
        connection_id: '6',
        connection_topic: 'Pet Friendly Hotels',
        connection_name: 'Sonesta Simply Suites Charlotte University',
        host_name: 'Daymond John',
        date: '',
        start_time: '18:00',
        end_time: '18:30',
        location: '8812 University E Dr, Charlotte, NC 28213',
        details: 'Luxury gathering with your pugs',
        image: 'https://cdn.shopify.com/s/files/1/1638/5471/files/Dog_hoodies_large.jpg?v=1551613364'
    }
];

exports.find = () => events;

exports.findByID = connection_id => events.find(event => event.connection_id === connection_id);

exports.updateById = function(connection_id, newConnection) {
    let event = events.find(event => event.connection_id === connection_id);
    if(event){
        event.connection_topic = newConnection.connection_topic;
        event.connection_name = newConnection.connection_name;
        event.host_name = newConnection.host_name;
        event.date = newConnection.date;
        event.start_time = newConnection.start_time;
        event.end_time = newConnection.end_time;
        event.location = newConnection.location;
        event.details = newConnection.details;
        event.image = newConnection.image;
        return true;
    } else{
        return false;
    };
}

exports.deleteById = function(connection_id){
    let index = events.findIndex(event => event.connection_id === connection_id);
    if(index !== -1) {
        events.splice(index, 1);
        return true;
    } else {
        return false;
    }
};

exports.save = function(event) {
    event.connection_id = uuidv4();
    events.push(event);
};