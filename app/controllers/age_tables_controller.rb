# app/controllers/age_tables_controller.rb
class AgeTablesController < ApplicationController
  def new
    @age_table = AgeTable.new
  end

  def create
    @age_table = AgeTable.new(age_table_params)
    if @age_table.save
      redirect_to root_path, notice: '年齢表が正常に作成されました。'
    else
      flash.now[:alert] = '年齢表の作成中にエラーが発生しました。'
      render :new
    end
  end

  def destroy
    @age_table = AgeTable.find(params[:id])
    @age_table.destroy
    redirect_to root_path, notice: '年齢表が削除されました。'
  end

  private

  def age_table_params
    params.require(:age_table).permit(:user_id, :table_title)
  end
end
