class SampleController < ApplicationController
  def index
    @sample_props = { sample: {name: "Sample" }}
  end
end
