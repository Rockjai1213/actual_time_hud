function EnableGui()
    SendNUIMessage({showUI = true; })
end

function DisableGui()
    SendNUIMessage({showUI = false; })
end

Citizen.CreateThread(function()

    local isPauseMenu = false

	while true do
		Citizen.Wait(0)

		if IsPauseMenuActive() then -- ESC Key
			DisableGui()
		else
			Citizen.Wait(200)
			EnableGui()
		end
	end
end)
