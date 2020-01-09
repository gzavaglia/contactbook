class Contact < ApplicationRecord
    has_many :nicknames

    validates :name, presence: true
    validates :phone, uniqueness: true
    validates :email, uniqueness: true
end
