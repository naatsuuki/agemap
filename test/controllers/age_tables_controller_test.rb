require "test_helper"

class AgeTablesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get age_tables_new_url
    assert_response :success
  end

  test "should get create" do
    get age_tables_create_url
    assert_response :success
  end

  test "should get destroy" do
    get age_tables_destroy_url
    assert_response :success
  end
end
