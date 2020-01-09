class NicknamesSerializer
    def initialize(nick_object)
        @nick = nick_object
    end

    def to_serialized_json
        options = {
            include: {
                contact: {
                    except: [:created_at, :updated_at]
                    }},
                     except: [:created_at, :updated_at]
                    }

        @nick.to_json(options)
    end

end