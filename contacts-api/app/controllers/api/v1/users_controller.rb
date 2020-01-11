class Api::V1::UsersController < ApplicationController
    def index
        # @contacts = Contact.all

        # render json: @contacts, status: 200
        users = User.all
        render json: users, status: 200
    end

    def show
        user = User.find(params[:id])

        render json: user, status: 200
    end
end
