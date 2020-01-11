require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(username: "Gio")
user2 = User.create(username: "Rocky")
Contact.create(
    [
        {name: Faker::TvShows::RuPaul.queen, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user},
        {name: Faker::TvShows::RuPaul.queen, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user},
        {name: Faker::TvShows::RuPaul.queen, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user},
        {name: Faker::TvShows::RuPaul.queen, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user},
        {name: Faker::TvShows::RuPaul.queen, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user},
        {name: Faker::TvShows::RuPaul.queen, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user},
        {name: Faker::TvShows::RuPaul.queen, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user},
        {name: Faker::TvShows::RuPaul.queen, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user},
        {name: Faker::TvShows::RuPaul.queen, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user},
        {name: Faker::TvShows::RuPaul.queen, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user},
        {name: Faker::TvShows::Friends.character, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user2},
        {name: Faker::TvShows::Friends.character, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user2},
        {name: Faker::TvShows::Friends.character, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user2},
        {name: Faker::TvShows::Friends.character, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user2},
        {name: Faker::TvShows::Friends.character, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user2},
        {name: Faker::TvShows::Friends.character, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user2},
        {name: Faker::TvShows::Friends.character, phone: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, user: user2}
    ]
)

