class Product < ActiveRecord::Base
  scope :is_featured, lambda {|featured_boolean| {:conditions => {:featured => featured_boolean}}}
  serialize :images
end
