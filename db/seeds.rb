Reservation.destroy_all
User.destroy_all
City.destroy_all
Car.destroy_all

User.create(username: 'seedUser')
Car.create(name: 'Bugatti', model: 'Chiron', description: '2018 blue car', price: 439000000)
City.create(name: 'Montelibano')
Reservation.create(car_id: 1, city_id: 1, user_id: 1, date: '2021-11-1')

