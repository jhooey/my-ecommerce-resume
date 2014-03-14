class AddRoletoProducts < ActiveRecord::Migration
  def self.up
    add_column :products, :title, :string
    add_column :products, :short, :text
    add_column :products, :long, :text
    add_column :products, :images, :string
    add_column :products, :featured, :boolean
    add_column :products, :in_stock, :boolean
  end
  def change
  end
  def self.down
    remove_column :products, :title, :string
    remove_column :products, :short, :text
    remove_column :products, :long, :text
    remove_column :products, :images, :string
    remove_column :products, :featured, :boolean
    remove_column :products, :in_stock, :boolean
  end
end
