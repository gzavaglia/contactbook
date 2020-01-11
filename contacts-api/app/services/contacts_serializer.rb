class ContactsSerializer
    def initialize(contact_object)
        @contact = contact_object
    end

    def to_serialized_json
        options = {
            include: {
                user: {
                    except: [:created_at, :updated_at]
                    }},
                     except: [:created_at, :updated_at]
                    }

        @contact.to_json(options)
    end

end