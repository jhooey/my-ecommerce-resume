class Product < ActiveRecord::Base
  scope :is_featured, lambda {|featured_boolean| {:conditions => {:featured => featured_boolean}}}
  serialize :images
  
  default_scope order('created_at DESC')
end
