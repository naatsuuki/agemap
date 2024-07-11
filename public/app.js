$(document).ready(function() {
  const csrfToken = $('meta[name="csrf-token"]').attr('content');

  $('#ageComparisonForm').on('submit', function(event) {
    event.preventDefault();
    const userName = $('#userName').val();
    const userBirthYear = $('#userBirthYear').val();
    const comparisonName = $('#comparisonName').val();
    const comparisonBirthYear = $('#comparisonBirthYear').val();

    // テーブルの見出し部分の名前と生年を更新する
    $('#ageComparisonTable thead tr').html(`
      <th>西暦</th>
      <th>${userName} (${userBirthYear}年生まれ)</th>
      <th>${comparisonName} (${comparisonBirthYear}年生まれ)</th>
    `);

    $.ajax({
      url: '/api/create-age-table',
      method: 'POST',
      contentType: 'application/json',
      headers: {
        'X-CSRF-Token': csrfToken
      },
      data: JSON.stringify({
        userName: userName,
        userBirthYear: userBirthYear,
        comparisonName: comparisonName,
        comparisonBirthYear: comparisonBirthYear
      }),
      success: function(data) {
        // 以前のテーブル行をクリア
        $('#ageComparisonTable tbody').empty();

        // 各年齢の結果の新しい行を追加
        for (let age = 0; age <= 100; age++) {
          const userYear = parseInt(userBirthYear) + age;
          const comparisonAge = userYear - parseInt(comparisonBirthYear);

          const row = `<tr>
                        <td>${userYear}年</td>
                        <td>${age}歳</td>
                        <td>${comparisonAge}歳</td>
                      </tr>`;
          $('#ageComparisonTable tbody').append(row);
        }
      },
      error: function(xhr, status, error) {
        console.error('エラー:', error);
      }
    });
  });
});
