class Api::V1::NicknamesController < ApplicationController

def index
    nicknames = Nickname.all
    render json: NicknamesSerializer.new(nicknames).to_serialized_json
end

def create
    nickname = Nickname.new(nickname_params)
    if nickname.save
        render json: NicknamesSerializer.new(nickname).to_serialized_json
    else
        render json: {message: "Creating that nickname failed"}
    end
end

def update
    nickname = Nickname.find_by(id: params[:id])
    if day.update(nickname_params)
        render json: NicknamesSerializer.new(nickname).to_serialized_json
    else
        render json: {message: "Cannot update that nickname"}
    end
end


private

    def contact_params
        params.require(:contact).permit(:nickname, contact_id)
    end

end