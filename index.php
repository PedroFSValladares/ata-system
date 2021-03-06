<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ata de Reunião</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
  <script src="https://kit.fontawesome.com/cf4fb9e680.js" crossorigin="anonymous"></script>
  <script type="text/javascript" src="./assets/js/jquery.js"></script>
</head>

<body>
  <div class="container">
    <div class="row mt-5">
      <div class="col-lg-6 col-sm-12 mb-sm-3">
        <div class="card mx-auto">
          <div class="card-header">
            <h3 class="text-center">Formulário de Dados</h3>
          </div>
          <div class="card-body">
            <form id="form1">
              <div class="mb-3 position-relative">
                <label for="campo" class="form-label">Itens para Pauta</label>
                <input type="text" class="form-control campo" placeholder="Ex: Elaboração para plano de ensino..." />
                <div class="invalid-tooltip">
                  O campo não pode estar vazio!
                </div>
              </div>

              <div class="mb-3 d-flex justify-content-end">
                <button class="btn btn-success botao">
                  Add
                </button>
              </div>
              <div class="mb-3 lista">
              </div>
              <div class="mb-3">
                <label for="detalhes" id="detalhes" class="form-label">Detalhes</label>
                <textarea class="form-control" name="detalhes" id="detalhes" cols="20" rows="10" required></textarea>
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-end">
                  <input class="btn btn-primary botaoContinuar" type="submit" value="Continuar">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12">
        <div class="card mx-auto">
          <div class="card-header">
            <h3 class="text-center">Assinaturas</h3>
          </div>
          <div class="card-body">
            <form id="form2">
              <div class="mb-3 position-relative">
                <label for="campo" class="form-label">Membros da Ata</label>
                <input type="text" class="form-control campo" placeholder="Ex: Professor..." disabled>
                <div class="invalid-tooltip">
                  O campo não pode estar vazio!
                </div>
              </div>
              <div class="mb-3 d-flex justify-content-end">
                <button class="btn btn-success botao" disabled>
                  <i class="fa-solid fa-user-plus"></i>
                </button>
              </div>
              <div class="mb-3 lista">
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-end">
                  <input class="btn btn-primary" id="visualizar" type="submit" value="Continuar" disabled>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <script src="./assets/js/addItem.js"></script>
  <script src="./assets/js/controleForm.js"></script>
</body>

</html>