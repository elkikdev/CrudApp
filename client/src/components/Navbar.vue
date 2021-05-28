<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-container>
				<b-navbar-brand href="#">App</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav class="links">

						<router-link :to="{ name: 'Home' }" class="link">
							<b-nav-item href="/">
								<i class="fas fa-home"></i> Home
							</b-nav-item>
						</router-link>


						<router-link :to="{ name: 'AddUser' }">
							<b-nav-item href="/">
								<i class="fas fa-user-plus"></i> 
								Add Employee
							</b-nav-item>
						</router-link>

					</b-navbar-nav>
				</b-collapse>
			</b-container>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: "Navbar",
};
</script>
