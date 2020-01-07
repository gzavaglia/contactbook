class Contact < ApplicationRecord
    validates :name, presence: true
    validates :phone, uniqueness: true
    validates :email, uniqueness: true
end
