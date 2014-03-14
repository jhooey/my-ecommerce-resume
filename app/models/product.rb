class Product < ActiveRecord::Base
  scope :is_featured, lambda {|featured_boolean| {:conditions => {:featured => featured_boolean}}}
  serialize :images
 
  def change
    create_table :products do |t|
      t.string :title
      t.text :short
      t.text :long
      t.string :images
      t.boolean :featured
      t.boolean :in_stock
 
      t.timestamps
    end
  end
end
