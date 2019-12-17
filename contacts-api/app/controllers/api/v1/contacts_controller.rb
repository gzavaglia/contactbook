class Api::V1::ContactsController < ApplicationController
    def index
        @contacts = Contact.all

        render json: @contacts, status: 200
    end

    def show
        @contact = Contact.find(params[:id])
        
        render json: @contact, status: 200
    end

    def create
        @contact = Contact.create(contact_params)

        render json: @contact, status: 200
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
        params.require(:contact).permit(:name, :phone, :email)
    end
end
