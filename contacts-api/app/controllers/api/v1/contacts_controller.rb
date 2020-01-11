class Api::V1::ContactsController < ApplicationController
    def index
        # @contacts = Contact.all
        user = User.find(params[:user_id])
        contacts = user.contacts
        render json: ContactsSerializer.new(contacts).to_serialized_json, status: 200
    end

    def show
        user = User.find(params[:user_id])
        contact = user.contacts
        render json: ContactsSerializer.new(contact).to_serialized_json, status: 200
    end

    def create
        contact = Contact.create(contact_params)
    if contact.save
        render json: contact, status: 200
    else
        render json: {message: "Creating contact failed"}, status: 400
    end

    end

    def edit 
        @contact = Contact.find(params[:id])
    end

    def update
        @contact = Contact.find(params[:id])
        @contact.update(contact_params)
        render json: @contact, status: 200
    end

    def destroy
        @contact = Contact.find(params[:id])
        @contact.delete
        render json: {contactId: @contact.id}
    end

    private

    def contact_params
        params.require(:contact).permit(:name, :phone, :email, :user_id)
    end
end
