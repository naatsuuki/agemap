$(document).ready(function() {
    // CSRFトークンを取得
    const csrfToken = $('meta[name="csrf-token"]').attr('content');
  
    $('#createTableButton').on('click', function() {
      $.ajax({
        url: '/api/create-age-table',
        method: 'POST',
        headers: {
          'X-CSRF-Token': csrfToken // CSRFトークンをリクエストヘッダーに含める
        },
        data: {
          userName: $('#userName').val(),
          userBirthYear: $('#userBirthYear').val(),
          comparisonName: $('#comparisonName').val(),
          comparisonBirthYear: $('#comparisonBirthYear').val()
        },
        success: function(data) {
          console.log('成功:', data);
          $('#result').html(data.table);
        },
        error: function(xhr, status, error) {
          console.error('エラー:', error);
        }
      });
    });
  });
  